// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GppGoodIcon from '@mui/icons-material/GppGood';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Diversity1Icon from '@mui/icons-material/Diversity1';
const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  AutoAwesomeIcon: AutoAwesomeIcon,
  GppGoodIcon: GppGoodIcon,
  AddBoxIcon: AddBoxIcon,
  Diversity1Icon: Diversity1Icon,
};

// ==============================|| MENU ITEMS ||============================== //

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      title: 'Dashboard',
      // caption: 'Dashboard',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/dashboard/default'
        }
      ]
    },
    {
      id: 'appointment',
      title: 'appointment',
      type: 'group',
      icon: icons['AccountTreeOutlinedIcon'],
      children: [
        {
          id: 'appointment-add',
          title: 'Add Appointment',
          type: 'item',
          url: '/appointment/add-appointment',
          icon: icons['AddBoxIcon']
        },
        {
          id: 'appointment-view',
          title: 'Appointment',
          type: 'item',
          url: '/appointment/view-appointment',
          icon: icons['Diversity1Icon']
        },
      ]
    },
    {
      id: 'services',
      title: 'services',
      type: 'group',
      icon: icons['AccountTreeOutlinedIcon'],
      children: [
        {
          id: 'services-Specialities',
          title: 'Specialities',
          type: 'item',
          url: '/services/Specialities',
          icon: icons['AutoAwesomeIcon']
        },
        {
          id: 'services-Healthcare',
          title: 'Healthcare',
          type: 'item',
          url: '/services/Healthcare',
          icon: icons['GppGoodIcon']
        }
      ]
    }    
  ]
};
