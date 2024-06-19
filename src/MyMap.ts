export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class MyMap {
  private googleMap: google.maps.Map;

  constructor(containerId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(containerId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
        mapId: "MAP_ME_ID",
      }
    );
  }

  async addMarker(entity: Mappable): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;
    const marker = new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      },
    });

    marker.addListener("click", () => {
      const inforWindow = new google.maps.InfoWindow({
        content: entity.markerContent(),
      });

      inforWindow.open(this.googleMap, marker);
    });
  }
}
