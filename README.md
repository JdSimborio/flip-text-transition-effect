# Introduction

This is a simple javascript class for handling the flip-text effect. It's similar to a carousel but with a delay per item.

# Usage

You can use it by creating importing the script file somewhere into your html code.

`<script src="/path/to/effect/effect.js">`

Then you can create a new instance of the class and pass the options

`new DSFlipEffect(container_selector, item_wrapper_selector, transition_duration, loop_delay, clones);`

## Arguments

#### container_selector

##### required

The root element of the effect and parent of item wrapper (and the clones produced).
**Must be unique to be avoid conflicts with other elements.**

#### item_wrapper_selector

##### required

The wrapper for the items. Will be cloned to fill the entire container and make sure the loop is working correctly.

#### transition_duration

###### optional, defaults to 1000

The duration of the transition between items

#### loop_delay

###### optional, defaults to 1000

The delay between items

#### clones

###### optional, defaults to 1

The number of clones to be created to make the loop effect. If

# Example

`var effect = new DSFlipEffect('.ds-flip-container', '.ds-flip', 1000, 1000, 2);`

You can check the index.html file in the repository to see a working example of the effect.
