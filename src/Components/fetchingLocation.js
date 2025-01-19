const fetchCoordinates = async (location) => {
  const googleApiKey = "AIzaSyCKNkZFeWohNszvrBA6RoSyL4gJp0TYltI";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    location
  )}&key=${googleApiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error("No Location Found");
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default fetchCoordinates;
