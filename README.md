# fretboard-spa
spaced-repetition adjusted by timing reproduction

# what is this?
this app will probably be written mostly in js
similar to anki flashcards, this app will throw up a note name (or maybe even scales, arps, intervals) for you to play on your guitar, and then the app will analyze and grade your reproduction, and the time it took you to reproduce what you see on screen. depending on how well you do, the note (specific to that string) will have its interval increased or decreased. this way, the stuff it thinks you suck at will come up more frequently, while stuff you're good at won't come up as often.

could probably fashion that functionality into some tool to learn music theory or the guitar i guess.

# why?
i want to achieve musical fluency.

# how?
SPA will need access to the correct mic, and be able to capture and analyze audio and recognize notes, even if detuned slightly.
if i can't find an algo for this, i'll have to take it upon myself to train a model through tensorflow and integrate it with the SPA somehow - may have to be a flask.io server that contains the model and has an endpoint exposed for sending audio signal and the "desired" note, with the response from said server to be either true or false for fail/pass. similar to the signlingo repo.

wish me luck