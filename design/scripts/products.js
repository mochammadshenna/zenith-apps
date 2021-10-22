// The following example creates five accessible and
// focusable markers.
$(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
    });
  });
function initMap() {
    let lat = document.getElementById("lat").innerHTML
    let lng = document.getElementById("lng").innerHTML
    let shopName = document.getElementById("shopName").innerHTML
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: Number(lat), lng: Number(lng) },
    });
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
    // receives the initial focus when tab is pressed. Use arrow keys to
    // move between markers; press tab again to cycle through the map controls.
    
    console.log(lat, lng);
    const tourStops = [
      [{ lat: Number(lat), lng: Number(lng) }, `${shopName}`],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
  
    // Create the markers.
    tourStops.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `Toko`,
        optimized: false,
      });
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }