# Package Tests

## Run 

Within your app you could run this test with:


````
  meteor test-packages the-guitarman:broadcast-stations
````

    Tinytest.add 'radio - find radio station by alias name', (test) -> 
      name = BroadcastStation.find(' Deutschlandfunk ', 'radio')
      test.equal name, 'DLF', 'Radio broadcast station not found'

    Tinytest.add 'radio - find nothing for wrong type', (test) -> 
      name = BroadcastStation.find(' Deutschlandfunk ', 'television')
      test.equal name, null, 'should return null'

    Tinytest.add 'television - find tv station by alias name', (test) -> 
      name = BroadcastStation.find(' Das Erste ', 'television')
      test.equal name, 'ARD', 'Television broadcast station not found'

    Tinytest.add 'television - find nothing for wrong type', (test) -> 
      name = BroadcastStation.find(' Das Erste ', 'radio')
      test.equal name, null, 'should return null'

    Tinytest.add 'radio or television - find tv station by alias name', (test) -> 
      name = BroadcastStation.find(' Das Erste ')
      test.equal name, 'ARD', 'Television broadcast station not found'

    Tinytest.add 'radio or television - find tv station by alias name with wrong type', (test) -> 
      name = BroadcastStation.find(' Das Erste ', '123982743287zfdsjvndj/&$&%§')
      test.equal name, 'ARD', 'Television broadcast station not found'

    Tinytest.add 'radio or television - find radio station by alias name', (test) -> 
      name = BroadcastStation.find(' Deutschlandfunk ')
      test.equal name, 'DLF', 'Radio broadcast station not found'

    Tinytest.add 'radio or television - find radio station by alias name with wrong type', (test) -> 
      name = BroadcastStation.find(' Deutschlandfunk ', '123982743287zfdsjvndj/&$&%§')
      test.equal name, 'DLF', 'Radio broadcast station not found'

    Tinytest.add 'empty input - do not search', (test) -> 
      name = BroadcastStation.find(undefined)
      test.equal name, undefined, 'should return undefined'
