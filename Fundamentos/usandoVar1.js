//escopo global
{
    {
        {
            {
                var sera = 'sera?'
            }
        }
    }
}

console.log(sera)

//escopo local
function teste(local) {
    return console.log(local)
}
teste('legal!!')