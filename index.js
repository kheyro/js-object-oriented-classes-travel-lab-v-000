class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate =  new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year-this.startDate.getFullYear()
  }
}


class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    const this.eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  }

  blocksTravelled() {
    vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    horizontal = this.eastWest.indexOf(endingLocation) - this.eastWest.indexOf(beginningLocation)
    return vertical + horizontal
  }

}
