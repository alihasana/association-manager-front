let link = window.location.href;

function sidebarAuthorization(){
    //let childrenResult = [];

    if(link.indexOf("sadmin") !== -1) {
        return [
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
            },
            {
                id: 'annonce',
                title: 'Annonce',
                type: 'item',
                url: '/sadmin/annonces',
                icon: 'feather icon-calendar',
            },
            {
                id: 'product',
                title: 'Product',
                type: 'item',
                url: '/sadmin/products',
                icon: 'feather icon-shopping-bag',
            }
        ]
    }
    else if (link.indexOf("admin") !== -1)
    {
        return [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                url: '/admin',
                icon: 'feather icon-home',
            },
            {
                id: 'associations',
                title: 'Associations',
                type: 'item',
                url: '/admin/associations',
                icon: 'feather icon-globe',
            },
            {
                id: 'membres',
                title: 'Membres',
                type: 'item',
                url: '/admin/membres',
                icon: 'feather icon-user',
            },
            {
                id: 'groupe',
                title: 'Groupe',
                type: 'item',
                url: '/admin/groupe',
                icon: 'feather icon-users',
            },
            {
                id: 'staffs',
                title: 'Staffs',
                type: 'item',
                url: '/admin/staffs',
                icon: 'feather icon-users',
            },
            {
                id: 'intervenants',
                title: 'Intervenants',
                type: 'item',
                url: '/admin/intervenants',
                icon: 'feather icon-user-plus',
            },
            {
                id: 'projets',
                title: 'Projets',
                type: 'item',
                url: '/admin/projets',
                icon: 'feather icon-folder',
            },
            {
                id: 'transactions',
                title: 'Transactions',
                type: 'item',
                url: '/admin/transactions',
                icon: 'feather icon-book',
            },
            {
                id: 'planning',
                title: 'Planning',
                type: 'item',
                url: '/admin/plannings',
                icon: 'feather icon-calendar',
            },
            {
                id: 'announce',
                title: 'Announce',
                type: 'item',
                url: '/admin/announces',
                icon: 'feather icon-calendar',
            }
        ]
    }
    else if (link.indexOf("membre") !== -1)
    {
        return [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                url: '/membre',
                icon: 'feather icon-home',
            },
            {
                id: 'associations',
                title: 'Associations',
                type: 'item',
                url: '/membre/associations',
                icon: 'feather icon-globe',
            },
            {
                id: 'projets',
                title: 'Projets',
                type: 'item',
                url: '/membre/projets',
                icon: 'feather icon-folder',
            }
        ]
    }
}

export default {
    items: [
        {
            id: 'uri-dashboard',
            //title: 'Dashboard',
            type: 'group',
            icon: 'icon-navigation',
            children: sidebarAuthorization()
        }
    ]
}
