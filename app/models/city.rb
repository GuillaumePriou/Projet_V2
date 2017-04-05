class City < ActiveRecord::Base
  before_validation :geocode
  
  private
     def geocode
       places = Nominatim.search(self.name).limit(1).address_details(true)
       place = places.first
       if place
         self.longitude = place.lon
         self.latitude = place.lat
       end
     end
end
