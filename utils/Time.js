export const brDate = () => {
    const now = new Date()
    now.setHours(now.getHours() - 3)
    return now
}

export default brDate