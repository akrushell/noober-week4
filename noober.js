async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write code to loop through the rides

  let passengerName
  let passengerPhone
  let passengerNumberOfPassengers
  let passengerPickupAddressLine1
  let passengerPickupAddressLine2
  let passengerDropoffAddressLine1
  let passengerDropoffAddressLine2
  let levelOfService
  let outputElement = document.querySelector('.rides')


  for (let i = 0; i < json.length; i++) {
    //need to figure out why xl and purple are not working, and update purple html 
    if (json[i].length > 1) {
      levelOfService = "Noober Pool"
      outputElement.insertAdjacentHTML('beforeend', `
      
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>
`)
      for (let a = 0; a < json[i].length; a++) {
        passengerName = json[i][a].passengerDetails.first + [" "] + json[i][a].passengerDetails.last + [" "]
        passengerPhone = json[i][a].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][a].numberOfPassengers
        passengerPickupAddressLine1 = json[i][a].pickupLocation.address
        passengerPickupAddressLine2 = json[i][a].pickupLocation.city + [', '] + json[i][a].pickupLocation.state + [' '] + json[i][a].pickupLocation.zip
        passengerDropoffAddressLine1 = json[i][a].dropoffLocation.address
        passengerDropoffAddressLine2 = json[i][a].dropoffLocation.city + [', '] + json[i][a].dropoffLocation.state + [' '] + json[i][a].dropoffLocation.zip

        outputElement.insertAdjacentHTML('beforeend', `

        <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
              <p class="font-bold text-gray-600">${passengerPhone}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${passengerNumberOfPassengers}
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${passengerDropoffAddressLine1}</p>
              <p>${passengerDropoffAddressLine2}</p>
            </div>
          </div>
        </div>
    `
        )

      }

    }
    else if (json[i][0].purpleRequested == true) {
      levelOfService = "Noober Purple"
      outputElement.insertAdjacentHTML('beforeend', `
    
     <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
     <i class="fas fa-car-side"></i>
     <span>${levelOfService}</span>
   </h1>
`)
      for (let a = 0; a < json[i].length; a++) {
        passengerName = json[i][a].passengerDetails.first + [" "] + json[i][a].passengerDetails.last + [" "]
        passengerPhone = json[i][a].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][a].numberOfPassengers
        passengerPickupAddressLine1 = json[i][a].pickupLocation.address
        passengerPickupAddressLine2 = json[i][a].pickupLocation.city + [', '] + json[i][a].pickupLocation.state + [' '] + json[i][a].pickupLocation.zip
        passengerDropoffAddressLine1 = json[i][a].dropoffLocation.address
        passengerDropoffAddressLine2 = json[i][a].dropoffLocation.city + [', '] + json[i][a].dropoffLocation.state + [' '] + json[i][a].dropoffLocation.zip

        outputElement.insertAdjacentHTML('beforeend', `

        <div class="border-4 border-purple-500 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-purple-600 text-white p-2">
            ${passengerNumberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${passengerPickupAddressLine1}</p>
            <p>${passengerPickupAddressLine2}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${passengerDropoffAddressLine1}</p>
            <p>${passengerDropoffAddressLine2}</p>
          </div>
        </div>
        </div>
        `)
      }
      //need to figure out how to add passengers in pool 
    }

    else if (json[i][0].numberOfPassengers > 3) {
      levelOfService = "Noober XL"
      outputElement.insertAdjacentHTML('beforeend', `

<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
<i class="fas fa-car-side"></i>
<span>${levelOfService}</span>
</h1>
`)

      for (let a = 0; a < json[i].length; a++) {
        passengerName = json[i][a].passengerDetails.first + [" "] + json[i][a].passengerDetails.last + [" "]
        passengerPhone = json[i][a].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][a].numberOfPassengers
        passengerPickupAddressLine1 = json[i][a].pickupLocation.address
        passengerPickupAddressLine2 = json[i][a].pickupLocation.city + [', '] + json[i][a].pickupLocation.state + [' '] + json[i][a].pickupLocation.zip
        passengerDropoffAddressLine1 = json[i][a].dropoffLocation.address
        passengerDropoffAddressLine2 = json[i][a].dropoffLocation.city + [', '] + json[i][a].dropoffLocation.state + [' '] + json[i][a].dropoffLocation.zip
      }
      outputElement.insertAdjacentHTML('beforeend', `
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${passengerName}</h2>
      <p class="font-bold text-gray-600">${passengerPhone}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
      ${passengerNumberOfPassengers}
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${passengerPickupAddressLine1}</p>
      <p>${passengerPickupAddressLine2}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${passengerPickupAddressLine1}</p>
      <p>${passengerDropoffAddressLine2}</p>
    </div>
  </div>
</div>
  `)

    }

    else {
      levelOfService = "Noober X"
      outputElement.insertAdjacentHTML('beforeend', `
<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
<i class="fas fa-car-side"></i>
<span>Noober X</span>
</h1>
`)
      for (let a = 0; a < json[i].length; a++) {
        passengerName = json[i][a].passengerDetails.first + [" "] + json[i][a].passengerDetails.last + [" "]
        passengerPhone = json[i][a].passengerDetails.phoneNumber
        passengerNumberOfPassengers = json[i][a].numberOfPassengers
        passengerPickupAddressLine1 = json[i][a].pickupLocation.address
        passengerPickupAddressLine2 = json[i][a].pickupLocation.city + [', '] + json[i][a].pickupLocation.state + [' '] + json[i][a].pickupLocation.zip
        passengerDropoffAddressLine1 = json[i][a].dropoffLocation.address
        passengerDropoffAddressLine2 = json[i][a].dropoffLocation.city + [', '] + json[i][a].dropoffLocation.state + [' '] + json[i][a].dropoffLocation.zip

        outputElement.insertAdjacentHTML('beforeend', `
        <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${passengerPickupAddressLine1}</p>
            <p>${passengerPickupAddressLine2}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${passengerPickupAddressLine1}</p>
            <p>${passengerDropoffAddressLine2}</p>
          </div>
        </div>
      </div>
      
      `)

      }
    }
  }
}


window.addEventListener('DOMContentLoaded', pageLoaded)
