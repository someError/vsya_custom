export function getItems (id) {
    const items = [
        {src: '/assets/imgs/sadako-preview.png', name: 'Sad', name2: 'ako', id: 'sadako', srcDetail: '/assets/imgs/sadako-detail.jpeg'},
        {src: '/assets/imgs/nails-preview.png', name: 'nail', name2: 's', id: 'nails', srcDetail: '/assets/imgs/nails-detail.jpeg'},
        {src: '/assets/imgs/rahataha-preview.png', name: 'phill', name2: 'black', id: 'phill-black', srcDetail: '/assets/imgs/rahataha-detail.jpeg'},
        {src: '/assets/imgs/whoops-preview.png', name: 'whoo', name2: 'ps', id: 'whooshy', srcDetail: '/assets/imgs/whoops-detail.jpeg'}
    ]

    if (id) {
        return items.filter(item => item.id === id)[0]
    }

    return [...items]
}