/// <reference types="@types/googlemaps" />
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(DivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(DivId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
}
