import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

const otherPageChildMenus: NavItemType[] = [

  {
    id: ncNanoId(),
    href: "/",
    name: "Accueil",
  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Collections",
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Search page",
  },
  {
    id: ncNanoId(),
    href: "/page-author",
    name: "Profil Artiste",
  },
  {
    id: ncNanoId(),
    href: "/nft-detailt",
    name: "NFT detailt",
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Paramètre de compte",
  },
  {
    id: ncNanoId(),
    href: "/page-upload-item",
    name: "Publier un NFT",
  },
  {
    id: ncNanoId(),
    href: "/connect-wallet",
    name: "Connexion Wallet",
  },

  {
    id: ncNanoId(),
    href: "/about",
    name: "Other Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/about",
        name: "Notre Concept",
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: "Nous Contacter",
      },
      {
        id: ncNanoId(),
        href: "/login",
        name: "Se connecter",
      },
      {
        id: ncNanoId(),
        href: "/signup",
        name: "S'inscrire",
      },
      {
        id: ncNanoId(),
        href: "/subscription",
        name: "Souscrire",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Page",
      },
      {
        id: ncNanoId(),
        href: "/blog-single",
        name: "Article",
      },
    ],
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Découvrez",
    type: "dropdown",
    children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/page-upload-item",
    name: "Centre d'aide",
  },
];
