export function getItems(id) {
    const items = [
        {
            src: '/assets/imgs/sadako-preview.png',
            name: 'sad',
            name2: 'ako',
            id: 'sadako',
            srcDetail: '/assets/imgs/sadako-detail.jpeg',
            gallery: [
                '/assets/imgs/sadako/sadako3.jpeg',
                '/assets/imgs/sadako/sadako4.jpeg',
                '/assets/imgs/sadako/sadako1.jpeg',
            ]
        },
        {
            src: '/assets/imgs/nails-preview.png',
            name: 'nail',
            name2: 's',
            id: 'nails',
            srcDetail: '/assets/imgs/nails-detail.jpeg',
            gallery: [
                '/assets/imgs/nails/nails1.jpeg',
                '/assets/imgs/nails/nails2.jpeg',
                '/assets/imgs/nails/nails3.jpeg',
            ]
        },
        {
            src: '/assets/imgs/rahataha-preview.png',
            name: 'phill',
            name2: 'black',
            id: 'phillblack',
            srcDetail: '/assets/imgs/rahataha-detail.jpeg',
            gallery: [
                '/assets/imgs/phillblack/phillblack3.jpeg',
                '/assets/imgs/phillblack/phillblack4.jpeg',
                '/assets/imgs/phillblack/phillblack1.jpeg',
            ]
        },
        {
            src: '/assets/imgs/whoops-preview.png',
            name: 'whoo',
            name2: 'shy',
            id: 'whooshy',
            srcDetail: '/assets/imgs/whoops-detail.jpeg',
            gallery: [
                '/assets/imgs/whoops/whoops3.jpeg',
                '/assets/imgs/whoops/whoops4.jpeg',
                '/assets/imgs/whoops/whoops2.jpeg',
            ]
        }
    ]

    if (id) {
        return items.filter(item => item.id === id)[0]
    }

    return [...items]
}