export function getItems(id) {
    const items = [
        {
            index: 0,
            src: '/assets/imgs/sadako-preview.png',
            name: 'sad',
            name2: 'ako',
            id: 'sadako',
            srcDetail: '/assets/imgs/sadako-detail.jpeg',
            cnt: 1,
            gallery: [
                '/assets/imgs/sadako/sadako3.jpeg',
                '/assets/imgs/sadako/sadako4.jpeg',
                '/assets/imgs/sadako/sadako1.jpeg',
            ]
        },
        {
            index: 1,
            src: '/assets/imgs/nails-preview.png',
            name: 'nail',
            name2: 's',
            id: 'nails',
            cnt: 3,
            srcDetail: '/assets/imgs/nails-detail.jpeg',
            gallery: [
                '/assets/imgs/nails/nails1.jpeg',
                '/assets/imgs/nails/nails2.jpeg',
                '/assets/imgs/nails/nails3.jpeg',
            ]
        },
        {
            index: 2,
            src: '/assets/imgs/rahataha-preview.png',
            name: 'phill',
            name2: 'black',
            id: 'phillblack',
            cnt: 7,
            srcDetail: '/assets/imgs/rahataha-detail.jpeg',
            gallery: [
                '/assets/imgs/phillblack/phillblack3.jpeg',
                '/assets/imgs/phillblack/phillblack4.jpeg',
                '/assets/imgs/phillblack/phillblack1.jpeg',
            ]
        },
        {
            index: 3,
            src: '/assets/imgs/whoops-preview.png',
            name: 'whoo',
            name2: 'shy',
            id: 'whooshy',
            srcDetail: '/assets/imgs/whoops-detail.jpeg',
            cnt: 5,
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