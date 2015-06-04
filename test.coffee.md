# Package Tests

## Run 

Within your app you could run this test with:

````
  meteor test-packages the-guitarman:broadcast-stations
````

    Tinytest.add 'radio - find radio station by alias name', (test) -> 
      name = BroadcastStation.find(' Deutschlandfunk ', 'radio')
      test.equal name, 'DLF', 'Radio broadcast station not found'

    Tinytest.add 'television - find tv station by alias name', (test) -> 
      name = BroadcastStation.find(' Das Erste ', 'television')
      test.equal name, 'ARD', 'Television broadcast station not found'

    Tinytest.add 'radio or television - find tv station by alias name', (test) -> 
      name = BroadcastStation.find(' Das Erste ')
      test.equal name, 'ARD', 'Television broadcast station not found'

    Tinytest.add 'radio or television - find radio station by alias name', (test) -> 
      name = BroadcastStation.find(' Deutschlandfunk ')
      test.equal name, 'DLF', 'Radio broadcast station not found'
