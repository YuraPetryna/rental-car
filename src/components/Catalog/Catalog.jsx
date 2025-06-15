import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, fetchMoreCars } from "../../redux/operations";
import { FilterForm } from "../FilterForm/FilterForm";
import {
  selectAllCars,
  // selectCurrentPage,
  selectFavorites,
  selectFilteredCars,
  selectHasMore,
  selectIsFilterApplied,
  selectIsLoading,
} from "../../redux/selectors";
import style from "./Catalog.module.css";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { resetPagination } from "../../redux/carsSlice";
import { CenteredCubeLoader } from "../CubeLoader/CubeLoader";

export const Catalog = () => {
  const dispatch = useDispatch();

  // Отримання стану з Redux
  const cars = useSelector(selectAllCars);
  const filteredCars = useSelector(selectFilteredCars);
  const isFilterApplied = useSelector(selectIsFilterApplied);
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorites);
  const hasMore = useSelector(selectHasMore);

  // Визначаємо, які машини показувати: усі чи відфільтровані
  const carsToShow = isFilterApplied ? filteredCars : cars;

  // При монтуванні компонента: скидаємо пагінацію та завантажуємо машини
  useEffect(() => {
    dispatch(resetPagination());
    dispatch(fetchCars());
  }, [dispatch]);

  // Обробка кнопки "Завантажити ще"
  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      dispatch(fetchMoreCars());
    }
  };

  // Генеруємо контент в залежності від стану
  let content;
  if (isLoading) {
    // Показуємо лоадер під час завантаження
    content = <CenteredCubeLoader />;
  } else if (cars.length === 0) {
    // Якщо немає жодної машини (початкове завантаження)
    content = <p className={style.message}>Автомобілі відсутні</p>;
  } else if (isFilterApplied && filteredCars.length === 0) {
    // Якщо фільтр застосовано, але немає результатів
    content = (
      <p className={style.message}>Не знайдено авто за заданими фільтрами</p>
    );
  } else {
    // Вивід списку авто
    content = carsToShow.map((car) => {
      const isFavorite = favorites.some((favCar) => favCar.id === car.id);
      return (
        <li key={car.id} className={style.liBox}>
          <div className={style.imgBox}>
            <FavoriteButton car={car} isFavorite={isFavorite} />
            <img src={car.img} alt={car.model} className={style.img} />
          </div>

          <div className={style.titleBox}>
            <p className={style.title}>
              {car.brand}&nbsp;
              <span className={style.blueTitle}>{car.model},</span>&nbsp;(
              {car.year})
            </p>
            <p className={style.title}>${car.rentalPrice}</p>
          </div>

          <div className={style.grayTextBox}>
            <p className={style.grayText}>
              {car.address.split(/,\s*/).slice(-2).join(" | ")} |{" "}
              {car.rentalCompany} |
            </p>
            <p className={style.grayText}>
              {car.type} |{" "}
              {typeof car.mileage === "number"
                ? car.mileage.toLocaleString("ru-RU")
                : car.mileage}
              km |
            </p>
          </div>

          <Link to={`/catalog/${car.id}`} className={style.btn}>
            Read more
          </Link>
        </li>
      );
    });
  }

  return (
    <div className={style.catalogWrapper}>
      {/* Форма фільтрації */}
      <FilterForm />

      {/* Список машин */}
      <ul className={style.ulWrapper}>{content}</ul>

      {/* Кнопка завантаження додаткових машин */}
      {hasMore && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
      )}
    </div>
  );
};
