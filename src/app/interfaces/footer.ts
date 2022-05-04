export interface Footer {
  _id: string;
  navBar: NavBar;
  phone: string;
  social_media: SocialMedia;
  copyright: string;
}

export interface NavBar {
  nav_bar_items: NavBarItem[];
}

export interface NavBarItem {
  accordion: string[];
  title: string;
}

export interface SocialMedia {
  facebook: string;
  instagram: string;
  twitter: string;
}
