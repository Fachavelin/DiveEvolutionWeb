export interface Header {
  _id: string;
  navBar: NavBar;
}

export interface NavBar {
  nav_bar_items: NavBarItem[];
}

export interface NavBarItem {
  accordion: string[];
  title: string;
}
