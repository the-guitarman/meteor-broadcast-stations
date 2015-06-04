# Find A Broadcast Station By Name Or An Alias

Check wether a string is a television or radio broadcast station.

**Note**: This is a first try to validate a given string is a known broadcast station. Better ideas and solutions like a non static data storage are gladly accepted.

**Note**: At the moment all broadcasting station data are static within the package and they're not complete. Feel free to add more stations. Therefor please see the data folder. Also feel free to send me a pull request.

## Installation

meteor add guitarman:broadcast-station

## Usage

Works on client and server. Case sensitivity of the input parameters doesn't matter.
If nothing was found, it will return *null*. If you put in an empty object as the first parameter  ('', null, undefined) you will get it back.

````
	// Find the german 'ARD'

	BroadcastStation.find(' ARD ')
	// returns: 'ARD'

	BroadcastStation.find(' ard ')
	// returns: 'ARD'

	BroadcastStation.find(' ARD HD ')
	// returns: 'ARD'
	


	// Find the german 'ARD' by an alias

	BroadcastStation.find(' Das Erste ')
	// returns: 'ARD'
	
	BroadcastStation.find(' das erste ')
	// returns: 'ARD'

	BroadcastStation.find(' Das Erste HD ')
	// returns: 'ARD'
````

### Specify the broadcast station type

You may wish to specify, that your're looking for a radio or television station only.

````
	BroadcastStation.find(' Das Erste ', 'radio')
	// returns: null

	BroadcastStation.find(' Deutschlandfunk ', 'radio')
	// returns: 'DLF'



	BroadcastStation.find(' Das Erste ', 'television')
	// returns: 'ARD'

	BroadcastStation.find(' Deutschlandfunk ', 'television')
	// returns: null 
````

If you don't specify the type, it will look through the television stations at first followed by the radio stations.

## License

Everything may break everytime. Therefore this package is licensed under
the **LGPL 3.0**. Do whatever you want with it, but please give improvements and bugfixes back so everyone can benefit.