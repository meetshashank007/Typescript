/// <reference types="@types/googlemaps" />
import { User } from './User';
import { Company } from './Company';
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(DivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(DivId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
