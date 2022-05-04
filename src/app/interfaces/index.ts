export interface Index {
  _id: string;
  body: Body;
}

export interface Body {
  button: string;
  section1: Section1;
  section2: Section2;
  title: string;
}

export interface Section1 {
  calidad: string[];
  precio: string[];
}

export interface Section2 {
  items: Item[];
  items_img?: string[];
}

export interface Item {
  button: string;
  description: string;
  title: string;
}

export interface ImgBody {
  _id: string;
  body_img: BodyImg;
}
export interface BodyImg {
  backgroud: string;
  section1: Section1;
  section2: Section2;
}
