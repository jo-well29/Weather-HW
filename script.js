const body = document.body

const url = 'http://api.weatherstack.com/current?access_key=f9d9c856a530c7e46d724f8f26c1bb47&query=New%20York&units=f'
// const param = {
// 	access_key: 'f9d9c856a530c7e46d724f8f26c1bb47',
// 	query: 'New York'
// }


const main = async () => {
	const response = await axios.get(url)
	console.log(response.data)
	const weatherData = response.data
	const widget = document.querySelector('.widget')
	const weatherDiv = document.createElement('div')
	const cityName = document.createElement('h1')
	const region = document.createElement('h1')
	const country = document.createElement('h1')
	const temp = document.createElement('h2')
	const weatherIcon = weatherData.current.weather_icons
	const time = document.createElement('h3')
	const unit = document.createElement('h2')
	

	cityName.innerText = weatherData.location.name
	region.innerText = weatherData.location.region
	country.innerText = weatherData.location.country
	temp.innerText = weatherData.current.temperature
	unit.innerText = weatherData.request.unit
	widget.innerHTML = `<img src = "${weatherIcon}">`
	time.innerText = weatherData.current.observation_time




	widget.appendChild(cityName)
	widget.appendChild(region)
	widget.appendChild(country)
	widget.appendChild(temp)
	widget.appendChild(unit)
	widget.appendChild(time)

	return weatherDiv
	console.log('Working')
}

window.onload = main()
