import tasty from "../assets/adv-tasty.svg";
import natural from "../assets/adv-natural.svg";
import garbage from "../assets/adv-garbage.svg";
import noMeat from "../assets/adv-no-meat.svg";

const features = [
  {
    id: 0,
    title: "Еда намного вкуснее",
    owner: "Фермерские продукты",
    isNegative: false,
    text: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    image: tasty,
  },
  {
    id: 1,
    title: "Просроченные продукты",
    owner: "Магазинные продукты",
    isNegative: true,
    text: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    image: garbage,
  },

  {
    id: 2,
    title: "Натуральные продукты",
    owner: "Фермерские продукты",
    isNegative: false,
    text: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
    image: natural,
  },

  {
    id: 3,
    title: "Некачественное мясо",
    owner: "Магазинные продукты",
    isNegative: true,
    text: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    image: noMeat,
  },
];

export default features;
