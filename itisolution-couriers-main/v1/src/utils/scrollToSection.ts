const scrollToSection = (sectionId: string): void => {

    const section = document.getElementById(sectionId)

    if (section) {

        // const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset

        // const offsetPosition = sectionPosition - 90

        // window.scrollTo({
        //     top: offsetPosition,
        //     behavior: 'smooth'
        // })

        window.location.hash = `#${sectionId}`

    }
}

export default scrollToSection
