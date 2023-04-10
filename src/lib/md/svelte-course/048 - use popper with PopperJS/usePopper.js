import { createPopper } from "@popperjs/core";

export default function createPopperAction() {
	let popperElement;
	let popperTooltip;
	let popperParams;
	let popper;

	function initializePopper() {
		if (popperElement && popperTooltip) {
			popper = createPopper(popperElement, popperTooltip, popperParams);
		}
	}
	function destroyPopper() {
		if (popper) {
			popper.destroy();
			popper = null;
		}
	}
	function usePopperElement(element) {
		popperElement = element;
		initializePopper();
		return {
			destroy() {
				popperElement = null;
				destroyPopper();
			},
		};
	}
	function usePopperTooltip(element, params) {
		popperParams = params;
		popperTooltip = element;
		initializePopper();

		return {
			// an update function here will allow you to update the params when you want!
			update(newParams) {
				popperParams = newParams;
				popper.setOptions(popperParams);
			},
			// cleanup (should be done in all actions)
			destroy() {
				popperTooltip = null;
				popperParams = null;
				destroyPopper();
			},
		};
	}
	return [usePopperElement, usePopperTooltip];
}
