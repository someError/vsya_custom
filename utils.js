export function getItems(id) {
    const items = [
        {
            index: 0,
            src: '/assets/imgs/sadako-preview.png',
            name: 'sad',
            name2: 'ako',
            id: 'sadako',
            srcDetail: '/assets/imgs/sadako-detail.jpeg',
            cnt: 7,
            gallery: [
                '/assets/imgs/sadako/sadako3.jpeg',
                '/assets/imgs/sadako/sadako4.jpeg',
                '/assets/imgs/sadako/sadako1.jpeg',
                '/assets/imgs/sadako/sadako5.jpeg',
            ],
            descr: ['She is', 'too CUTE to spook'],
            descrRu: ['Слишком милая', 'чтобы напугать'],
        },
        {
            index: 1,
            src: '/assets/imgs/nails-preview.png',
            name: 'nail',
            name2: 's',
            id: 'nails',
            cnt: 7,
            srcDetail: '/assets/imgs/nails-detail.jpeg',
            gallery: [
                '/assets/imgs/nails/nails1.jpeg',
                '/assets/imgs/nails/nails2.jpeg',
                '/assets/imgs/nails/nails3.jpeg',
                '/assets/imgs/nails/nails5.jpeg',
            ],
            descr: ['I admit,', ' I’m a little wicked'],
            descrRu: ['Я признаю,', 'Я бываю немного злой'],
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
                '/assets/imgs/phillblack/phillblack5.jpeg',
            ],
            descr: ['Don’t keep calm', 'I’m under your bed'],
            descrRu: ['Никакого тебе спокойствия', 'я под твоей кроватью'],
        },
        {
            index: 3,
            src: '/assets/imgs/whoops-preview.png',
            name: 'whoo',
            name2: 'shy',
            id: 'whooshy',
            srcDetail: '/assets/imgs/whoops-detail.jpeg',
            cnt: 6,
            gallery: [
                '/assets/imgs/whoops/whoops3.jpeg',
                '/assets/imgs/whoops/whoops4.jpeg',
                '/assets/imgs/whoops/whoops2.jpeg',
                '/assets/imgs/whoops/whooshy5.jpeg',
            ],
            descr: ['The only ghost', ' that lives here', 'is the HOLY ghost'],
            descrRu: ['Единственный призрак,', 'который живет здесь,', ' это Святой призрак'],
        }
    ]

    if (id) {
        return items.filter(item => item.id === id)[0]
    }

    return [...items]
}