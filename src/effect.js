class DSFlipEffect {
	constructor(parentSelector, wrapperSelector, transition_duration = 1000, loop_delay = 1000, clones = 1) {
		this.parent = document.querySelector(parentSelector)
		this.wrapper = this.parent.querySelector(wrapperSelector)
		this.original_items = Array.from(this.wrapper.children)
		this.transition_duration = transition_duration
		this.loop_delay = loop_delay
		this.clones = clones
		this.index = 0
		this.init()
		setTimeout(() => {
			this.run()
		}, loop_delay)
	}

	run() {
		const loop_event = () => {
			this.index = (this.index + 1) % (this.original_items.length + 1)
			this.new_items.forEach((item, i) => {
				item.style.transition = this.index == 0 ? `none` : `transform ${this.loop_delay}ms ease-in-out`
				item.style.transform = `translateY(${-100 * this.index}%)`
			})
			this.is_first_run = false
			setTimeout(loop_event, this.index == 0 ? 0 : this.transition_duration + this.loop_delay)
		}
		loop_event()
	}

	init() {
		this.new_items = this.original_items
		for (let i = 0; i < this.clones; i++) {
			const clone = this.wrapper.cloneNode(true)
			this.parent.appendChild(clone)
			Array.from(clone.children).forEach((item) => {
				this.new_items = this.new_items.concat(item)
			})
		}
	}
}
