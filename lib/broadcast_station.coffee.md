# BroadcastStation

This object has the main logic of the Package. 

    @BroadcastStation = BroadcastStation =


## find(stationName, type = null), findStation(stationName, type = null)

These functions consume the name of the searched broadcast station. *find* validates the input parameters and calls *findStation*. You should use *find* instead of *findStation*.

Parameters:
- stationName (String): The name or alias your're looking for.
- type (String, optional): Either 'television' or 'radio' to specify what you're looking for.

Return value:
Returns the broadcast station name (String) or null, if nothing was found or the empty object themself, which you put in before as first parameter.

        find: (stationName, type = null) ->
          if _.isEmpty(stationName)
            return stationName
          stationName = @.getCleanStationName(stationName)
          type = @.getCleanType(type)
          if ['television', 'radio'].indexOf(type) >= 0
            objectFound = @.findStation(stationName, type)
          else
            objectFound = @.findStation(stationName, 'television')
            if _.isEmpty(objectFound)
              objectFound = @.findStation(stationName, 'radio')
          return objectFound

        findStation: (stationName, type = null) ->
          objectFound = _.find @.getSearchData(type), (obj) ->
            retObjectFound = false
            key = _.first(_.keys(obj))
            aliases = _.first(_.values(obj))
            #console.log key + ' - ' + stationName
            if key.toLowerCase() == stationName.toLowerCase()
              retObjectFound = true
            else if aliases.length > 0
              aliasFound = _.find aliases, (alias) ->
                return true if alias.toLowerCase() == stationName.toLowerCase()
              if _.isEmpty(aliasFound)
                retObjectFound = false
              else
                retObjectFound = true
            return retObjectFound
          if _.isEmpty(objectFound)
            return null
          else
            return _.first(_.keys(objectFound))

## Helper Functions

        getCleanStationName: (stationName) ->
          return stationName.trim()

        getCleanType: (type) ->
          if not _.isEmpty(type)
            type = type.toLowerCase()
          else
            type = null
          return type

        getSearchData: (type) ->
          if type == 'television'
            TelevisionStations.data
          else if type == 'radio'
            RadioStations.data
