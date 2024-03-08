import { PropsSvg } from '../constants/icons';

export interface MenuItem {
  title: string;
  route: string;
  Icon?: (props: PropsSvg) => JSX.Element;
  submenu?: MenuItem[];
}
