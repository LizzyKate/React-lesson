import { useState } from "react"

const animals = ['bird', 'cat', 'rat', 'dog']

function Search(){
    const [location, setLocation] = useState("Seattle")
    const[animal, setAnimal] = useState("")
    function updateLocation(e) {
        setLocation(e.target.value) 
    }
    function updateAnimal(e){
        setAnimal(e.target.value)
    }
    return (
        <div className="search">
            <form action="">
                <label htmlFor="location">Location
                <input id="location" onChange={updateLocation} placeholder="location" value={location}></input>
                </label><br/>
                <label htmlFor="animal">
                    Animal
                    <select name="" id="animal"  onChange={updateAnimal} onBlur={updateAnimal} value={animal} >
                      <option value="" disabled={true}>Animal</option>
                        {
                            animals.map(e => {
                              return (
                                <option value={e} key={e}>{e}</option>
                              )
                            })
                        }
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Search