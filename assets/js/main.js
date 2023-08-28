handleSwitchThemeEvents()
function handleSwitchThemeEvents() {
	/**
	 * @type {HTMLInputElement | null}
	 */
	const switchTheme = document.getElementById("switch-toggle-theme")

	if (!switchTheme) return

	switchTheme.addEventListener("change", (event) => toggleTheme(event))
	switchTheme.addEventListener("keydown", (event) => {
		event.stopPropagation()
		const { key, target } = event
		if (key === "Enter") {
			target.checked = !target.checked
			toggleTheme(target)
		}
	})
}

/**
 * @param {Event} event
 */
function toggleTheme(event) {
	event.stopPropagation()
	const { target } = event

	if (target.checked) {
		document.body.classList.remove("light")
		return
	}

	document.body.classList.add("light")
}

const isSystemThemeLight = () => {
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
		return true
	}

	return false
}

handleDefaultTheme()
function handleDefaultTheme() {
	/**
	 * @type {HTMLInputElement | null}
	 */
	const switchTheme = document.getElementById("switch-toggle-theme")

	if (!switchTheme) return

	if (isSystemThemeLight()) {
		document.body.classList.add("light")
		switchTheme.checked = false
		return
	}

	document.body.classList.remove("light")
	switchTheme.checked = true
}
