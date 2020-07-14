document.querySelector('#frm').addEventListener('submit', function (e) {
    e.preventDefault()
    user = JSON.parse(localStorage.getItem('user'))
    console.log(e.target.elements.fname.value)  
    console.log(e.target.elements.dob.value)

    // push new data in table
    user.push({
        id: uuidv4(),
        fname: e.target.elements.fname.value,
        lname: e.target.elements.lname.value,
        email: e.target.elements.email.value,
        dob: e.target.elements.dob.value,
        bio: e.target.elements.bio.value
    })
    e.target.elements.fname.value = ''
    e.target.elements.lname.value = ''
    e.target.elements.email.value = ''
    e.target.elements.dob.value = ''
    e.target.elements.bio.value = ''
    localStorage.setItem('user', JSON.stringify(user))
    console.log('Data Stored...')
})

document.querySelector('#back').addEventListener('click', () => {
    location.href = 'test.html'
})