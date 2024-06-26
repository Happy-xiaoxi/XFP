export function h() {
					return Math.floor(65536 * (1 + Math.random()))
						.toString(16)
						.substring(1);
				}