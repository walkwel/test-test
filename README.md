# Installation

```npm i alset-reactgame-test --save```

## How To Use

```
import AlsetReactGame from 'alset-reactgame-test';

....
....
render(){
    return <ALSET-ReactGame
                game={String}                     // defaults -> Squad
                showCodeEditor={boolean}          // defaults -> false
                config={jsonString}               // defaults -> null
                player={String}                   // defaults -> player1
                player1Function={function(world,player){returns actions}} // defaults -> null
                player2Function={function(world,player){returns actions}}// defaults -> null
                mode={String}                     // defaults -> player-vs-bot
                player1Keys = {obj}  // defaults -> {s:left, f:right, e:up, d:down, w:action}
                player2Keys = {obj}  // defaults -> {j:left, l:right, i:up, k:down, p:action}   
                onPlay={func}                     // defaults -> noop
                onPause={func}                    // defaults -> noop
                onEnd={func}        // defaults -> noop (reports winner player1/player2)
                onError={func}                    // defaults -> noop
                onStateChange={func}              // defaults -> noop
                submitResponse={function(response){return String}} // optional  
            />

}
....
....
```

### Type of games

1.  gemCollector
2.  squadGemCollector
3.  squad
4.  singlePlayerTwoWindows

### Type of modes

1.  player-vs-player
2.  player-vs-bot
3.  bot-vs-bot
4.  bot-vs-custom-code( also send props showCodeEditor={true}) 
