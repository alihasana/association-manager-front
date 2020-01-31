export default {
    items: [
        {
            id: 'uri-dashboard',
            //title: 'Dashboard',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/sadmin',
                    icon: 'feather icon-home',
                },
				{
                    id: 'associations',
                    title: 'Associations',
                    type: 'item',
                    url: '/sadmin/associations',
                    icon: 'feather icon-globe',
                },
				{
                    id: 'membres',
                    title: 'Membres',
                    type: 'item',
                    url: '/sadmin/membres',
                    icon: 'feather icon-user',
                },
				{
                    id: 'groupe',
                    title: 'Groupe',
                    type: 'item',
                    url: '/sadmin/groupe',
                    icon: 'feather icon-users',
                },
				{
                    id: 'staffs',
                    title: 'Staffs',
                    type: 'item',
                    url: '/sadmin/staffs',
                    icon: 'feather icon-users',
                },
				{
                    id: 'intervenants',
                    title: 'Intervenants',
                    type: 'item',
                    url: '/sadmin/intervenants',
                    icon: 'feather icon-user-plus',
                },
				{
                    id: 'projets',
                    title: 'Projets',
                    type: 'item',
                    url: '/sadmin/projets',
                    icon: 'feather icon-folder',
                },
				{
                    id: 'transactions',
                    title: 'Transactions',
                    type: 'item',
                    url: '/sadmin/transactions',
                    icon: 'feather icon-book',
                },
				{
                    id: 'planning',
                    title: 'Planning',
                    type: 'item',
                    url: '/sadmin/plannings',
                    icon: 'feather icon-calendar',
                }
            ]
        }
    ]
}