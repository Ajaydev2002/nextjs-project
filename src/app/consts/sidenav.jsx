import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from "@mui/icons-material/Person";
import PagesIcon from "@mui/icons-material/Pages";
import WidgetsIcon from "@mui/icons-material/Widgets";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import EventIcon from "@mui/icons-material/Event";
import ContactsIcon from "@mui/icons-material/Contacts";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CategoryIcon from "@mui/icons-material/Category";
import InputIcon from "@mui/icons-material/Input";
import TableChartIcon from "@mui/icons-material/TableChart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import WebAssetIcon from "@mui/icons-material/WebAsset";


const Navigation = [
    {
        kind: 'header',
        title: 'MENU'
    },
    {
        segment: '/Dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon style={{fontSize: 18}}/>
    },
    {
        kind: 'header',
        title: 'PAGES'
    },
    {
        title: 'Authentication',
        icon: <PersonIcon style={{fontSize: 18}}/>,
    },
    {
        title: 'Pages',
        icon: <PagesIcon style={{fontSize: 18}}/>,
    },
    {
        segment: '/',
        title: 'Widgets',
        icon: <WidgetsIcon style={{fontSize: 18}}/>
    },

    {
        kind: 'header',
        title: 'APPS'
    },
    {
        segment: '/',
        title: 'Calendar',
        icon: <EventIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/',
        title: 'API keys', icon: <VpnKeyIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/',
        title: 'Contact', icon: <ContactsIcon style={{fontSize: 18}}/>
    },
    {
        segment: '/',
        title: 'LeaderBoard', icon: <LeaderboardIcon style={{fontSize: 18}}/>
    },

    {
        kind: 'header',
        title: 'COMPONENTS'
    },
    {
        segment: '/',
        title: 'Overview',
        icon: <DashboardIcon style={{fontSize: 18}}/>
    },
    {
        title: 'Components',
        icon: <CategoryIcon style={{fontSize: 18}}/>,
    },
    {
        title: 'Inputs',
        icon: <InputIcon style={{fontSize: 18}}/>,
    },
    {
        title: 'Data Display',
        icon: <TableChartIcon style={{fontSize: 18}}/>,
    },
    {
        title: 'Feedback',
        icon: <FeedbackIcon style={{fontSize: 18}}/>,
    },
    {
        title: 'Surfaces',
        icon: <WebAssetIcon style={{fontSize: 18}}/>,
    },
];

export default Navigation;