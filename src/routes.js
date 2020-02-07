import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard')); 
const AssociationManagerList = React.lazy(() => import('./components/Association/AssociationsList'));
const MembersList = React.lazy(() => import('./components/Member/MembersList'));
const SpeakersList = React.lazy(() => import('./components/Speaker/SpeakersList'));
const GroupeList = React.lazy(() => import('./components/Groupe/GroupeList'));
const StaffsList = React.lazy(() => import('./components/Staff/StaffsList'));
const TransactionsList = React.lazy(() => import('./components/Transaction/TransactionsList'));
// En cours
const Planning = React.lazy(() => import('./components/CommingSoon'));
const ProjectsList = React.lazy(() => import('./components/Project/ProjectsList'));


const routes = [
    // SADMIN
    { path: '/sadmin', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/sadmin/associations', exact: true, name: 'Liste des associations', component: AssociationManagerList },
    { path: '/sadmin/membres', exact: true, name: 'Liste des membres', component: MembersList },
    { path: '/sadmin/intervenants', exact: true, name: 'Liste des intervenants', component: SpeakersList },
    { path: '/sadmin/groupe', exact: true, name: 'Liste des staffs', component: GroupeList },
    { path: '/sadmin/staffs', exact: true, name: 'Liste des staffs', component: StaffsList },
    { path: '/sadmin/transactions', exact: true, name: 'Liste des transactions', component: TransactionsList },
    { path: '/sadmin/projets', exact: true, name: 'Liste des transactions', component: ProjectsList },
    { path: '/sadmin/plannings', exact: true, name: 'Planning', component: Planning },
    
    // ADMIN
    { path: '/admin', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/associations', exact: true, name: 'Liste des associations', component: AssociationManagerList },
    { path: '/admin/membres', exact: true, name: 'Liste des membres', component: MembersList },
    { path: '/admin/intervenants', exact: true, name: 'Liste des intervenants', component: SpeakersList },
    { path: '/admin/groupe', exact: true, name: 'Liste des staffs', component: GroupeList },
    { path: '/admin/staffs', exact: true, name: 'Liste des staffs', component: StaffsList },
    { path: '/admin/transactions', exact: true, name: 'Liste des transactions', component: TransactionsList },
    { path: '/admin/projets', exact: true, name: 'Liste des transactions', component: ProjectsList },
    { path: '/admin/plannings', exact: true, name: 'Planning', component: Planning },


    // MEMBRE
    { path: '/membre', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/membre/associations', exact: true, name: 'Liste des associations', component: AssociationManagerList },
    { path: '/membre/projets', exact: true, name: 'Liste des transactions', component: ProjectsList },

];

export default routes;