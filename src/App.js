import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaItem from './components/PizzaItem';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaItem title="Мексиканская" />
              <PizzaItem title="Четыре сезона" />
              <PizzaItem title="Маргарита" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
