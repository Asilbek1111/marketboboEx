import { url } from "inspector";

const statuses = [
  { value: "Published", id: 1 },
  { value: "Draft", id: 2 },
];
const table_headers = [
  { value: "ID", id: 1 },
  { value: "Title", id: 2 },
  { value: "Time", id: 3 },
  { value: "Status", id: 4 },
];
const table_dropdown_pagination = [
  { value: 5, id: 1 },
  { value: 10, id: 2 },
  { value: 15, id: 3 },
];
const table_body = [
  {
    title: "Next.js is the future of React",
    id: 1,
    time: "2022-12-05T07:46:42.703Z",
    status: "Draft",
  },
  {
    title: "Next.js is the future of React",
    id: 2,
    time: "2022-12-05T07:46:42.703Z",
    status: "Draft",
  },
  {
    title: "Next.js is the future of React",
    id: 3,
    time: "2022-12-05T07:46:42.703Z",
    status: "Draft",
  },
  {
    title: "Next.js is the future of React",
    id: 4,
    time: "2022-12-05T07:46:42.703Z",
    status: "Draft",
  },
  {
    title: "Next.js is the future of React",
    id: 5,
    time: "2022-12-05T07:46:42.703Z",
    status: "Draft",
  },
  {
    title: "Next.js is the future of React",
    id: 6,
    time: "2022-12-05T07:46:42.703Z",
    status: "Draft",
  },
  {
    title: "Next.js is the future of React",
    id: 7,
    time: "2022-12-05T07:46:42.703Z",
    status: "Draft",
  },
];

const logos = [
  {
    url: "https://backend.texnomart.uz//images/brands/2022101404154940058.webp",
  },
  {
    url: "https://backend.texnomart.uz//images/brands/2022101404501355729.webp",
  },
  {
    url: "https://backend.texnomart.uz//images/brands/2022101404542676301.webp",
  },
  {
    url: "https://backend.texnomart.uz//images/brands/2022101404542676301.webp",
  },
  {
    url: "https://backend.texnomart.uz//images/brands/2022101405315369098.webp",
  },
  {
    url: "https://backend.texnomart.uz//images/brands/2022101404183539183.webp",
  },
  {
    url: "https://backend.texnomart.uz//images/brands/2022101404450190315.webp",
  },
  {
    url: "https://backend.texnomart.uz//images/brands/2022101404474125545.webp",
  },
  {
    url: "https://backend.texnomart.uz//images/brands/2022101404461797247.webp",
  },
];
const categories = [
  {
    url: "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg",
    title: "Чангютгичлар",
  },
  {
    url: "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg",
    title: "Планшетлар",
  },
  {
    url: "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg",
    title: "Музлатгичлар",
  },
  {
    url: "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg",
    title: "Ҳаво совутгичлар",
  },
  {
    url: "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg",
    title: "Телевизорлар",
  },
  {
    url: "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg",
    title: "Фенлар",
  },
  {
    url: "https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg",
    title: "Кир ювиш машиналари",
  },
];

const phones = [
  {
    url: "https://texnomart.uz/_ipx/f_webp/https://backend.texnomart.uz/images/gallery/product/101271/31675/preview.jpg",
    title: "Смартфон Vivo V25 8/256Gb Қора",
    price: "5 646 000 сўм",
  },
  {
    url: "https://texnomart.uz/_ipx/f_webp/https://backend.texnomart.uz/images/gallery/product/101271/31675/preview.jpg",
    title: "Смартфон Vivo V25 8/256Gb Қора",
    price: "5 646 000 сўм",
  },
  {
    url: "https://texnomart.uz/_ipx/f_webp/https://backend.texnomart.uz/images/gallery/product/101271/31675/preview.jpg",
    title: "Смартфон Vivo V25 8/256Gb Қора",
    price: "5 646 000 сўм",
  },
  {
    url: "https://texnomart.uz/_ipx/f_webp/https://backend.texnomart.uz/images/gallery/product/101271/31675/preview.jpg",
    title: "Смартфон Vivo V25 8/256Gb Қора",
    price: "5 646 000 сўм",
  },
  {
    url: "https://texnomart.uz/_ipx/f_webp/https://backend.texnomart.uz/images/gallery/product/101271/31675/preview.jpg",
    title: "Смартфон Vivo V25 8/256Gb Қора",
    price: "5 646 000 сўм",
  },
  {
    url: "https://texnomart.uz/_ipx/f_webp/https://backend.texnomart.uz/images/gallery/product/101271/31675/preview.jpg",
    title: "Смартфон Vivo V25 8/256Gb Қора",
    price: "5 646 000 сўм",
  },
];
export {
  categories,
  statuses,
  table_headers,
  table_dropdown_pagination,
  table_body,
  logos,
  phones
};
