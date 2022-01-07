import React, { Component } from "react";
import { longdo, map, LongdoMap } from "../../src/LongdoMap";

class Mapaccs extends Component {
  initMap() {
    map.Layers.setBase(longdo.Layers.GRAY);		
		/*var marker = new longdo.Marker({ lon: 13.792254038556479, lat: 100.61789007116434 });
    var marker1 = new longdo.Marker(
      {
        title: "Marker",
        icon: {
          url: "https://map.longdo.com/mmmap/images/pin_mark.png",
          offset: { x: 12, y: 45 },
        },
        detail: "Drag me",
        visibleRange: { min: 7, max: 9 },
        draggable: true,
        weight: longdo.OverlayWeight.Top,
      }
    );
		map.Overlays.add(marker);
		map.Overlays.add(marker1);*/
  }

  //13.792254038556479, 100.61789007116434

  render() {
    const mapKey = "2976a2bc6506609e0814b3684a75f104";
    return (
      <div>
        <LongdoMap id="map" mapKey={mapKey} callback={this.initMap} />
      </div>
    );
  }
}

export default Mapaccs;
