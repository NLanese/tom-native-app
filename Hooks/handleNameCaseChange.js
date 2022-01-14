const nameObj = (firstname, lastname) => {
    return {first: firstname[0] + firstname.slice(1).toLowerCase(), last: lastname[0] + lastname.slice(1).toLowerCase()}
}

export default nameObj