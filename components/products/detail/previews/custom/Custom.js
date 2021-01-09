import React, { useState } from "react";
import Modal from "../../../../ui/modal/Modal";
import ChangeChoice from "./change-choice/ChangeChoice";
import ChangePreview from "./change-preview/ChangePreview";

export default function Custom() {
	const initialCustoms = {
		neckline: {
			text: "Neckline",
			type: "default",
			logo: "https://www.eshakti.com/styling%20images/As%20Shown.jpg",
			image:
				"https://www.eshakti.com/images/CL0080930/CL0080930-Neckline-As%20Shown.jpg",
		},
		sleeve: {
			text: "Sleeve Type",
			type: "default",
			logo: "https://www.eshakti.com/styling%20images/As%20Shown.jpg",
			image:
				"https://www.eshakti.com/images/CL0080930/CL0080930-SleeveType-As%20Shown_L.jpg|https://www.eshakti.com/images/CL0080930/CL0080930-SleeveType-As%20Shown_R.jpg",
		},
		length: {
			text: "Length",
			type: "default",
			logo: "https://www.eshakti.com/styling%20images/As%20Shown.jpg",
			image:
				"https://www.eshakti.com/images/CL0080930/CL0080930-Length-As%20Shown.jpg",
		},
	};
	const [customs, setCustoms] = useState(initialCustoms);
	const [showModal, setShowModal] = useState(false);

	const customsChoice = {
		neckline: {
			default: {
				name: "Default",
				logo: "https://www.eshakti.com/styling%20images/As%20Shown.jpg",
				image:
					"https://www.eshakti.com/images/CL0080930/CL0080930-Neckline-As%20Shown.jpg",
			},
			vneck: {
				name: "V Neck",
				logo: "https://www.eshakti.com/styling%20images/V%20Neck.jpg",
				image:
					"https://www.eshakti.com/images/CL0080930/CL0080930-Neckline-V%20Neck.jpg",
			},
			widev: {
				name: "Wide V",
				logo: "https://www.eshakti.com/styling%20images/Wide%20V.jpg",
				image:
					"https://www.eshakti.com/images/CL0080930/CL0080930-Neckline-Wide%20V.jpg",
			},
		},
		sleeve: {
			default: {
				name: "Default",
				logo: "https://www.eshakti.com/styling%20images/As%20Shown.jpg",
				image:
					"https://www.eshakti.com/images/CL0080930/CL0080930-SleeveType-As%20Shown_L.jpg|https://www.eshakti.com/images/CL0080930/CL0080930-SleeveType-As%20Shown_R.jpg",
			},
			sleeveless: {
				name: "Sleeveless",
				logo: "https://www.eshakti.com/styling%20images/Sleeveless.jpg",
				image:
					"https://www.eshakti.com/images/CL0080930/CL0080930-SleeveType-Sleeveless_L.jpg|https://www.eshakti.com/images/CL0080930/CL0080930-SleeveType-Sleeveless_R.jpg",
			},
		},
		length: {
			default: {
				name: "Default",
				logo: "https://www.eshakti.com/styling%20images/As%20Shown.jpg",
				image:
					"https://www.eshakti.com/images/CL0080930/CL0080930-Length-As%20Shown.jpg",
			},
			floorlengthdress: {
				name: "Floor Length Dress",
				logo:
					"https://www.eshakti.com/styling%20images/Floor_Length_Dress.jpg",
				image:
					"https://www.eshakti.com/images/CL0080930/CL0080930-Length-Floor%20Length%20Dress.jpg",
			},
		},
	};

	const customElement = [];
	for (const key in customs) {
		customElement.push(
			<div
				key={key}
				className="uppercase flex-grow cursor-pointer"
				onClick={() => setShowModal(true)}
			>
				<span>{key}</span>
				<img className="px-12 py-2" src={customs[key].logo} />
				<span className="underline lowercase text-xs">
					Change Style
				</span>
			</div>
		);
	}

	const changeCustomHandler = (newCustoms) => {
		setCustoms(newCustoms);
	};

	const cancelChangeCustomHandler = () => {
		setShowModal(false);
		setCustoms(initialCustoms);
	};

	return (
		<>
			<div className="col-span-2 flex flex-col text-center text-sm">
				<div className="my-2 text-xs">
					Shop 'As shown' <br />
					or change style
				</div>
				{customElement}
				<div className="uppercase box-border border-4 p-2 mx-5 my-2">
					Customize Style
				</div>
			</div>
			{showModal ? (
				<Modal
					title="Customize your style with eShakti FX"
					modalClose={cancelChangeCustomHandler}
					modalSave={() => setShowModal(false)}
				>
					<div className="relative p-6 flex-auto">
						<div className="grid grid-cols-2">
							<ChangePreview
								sleevel={
									customsChoice.sleeve[
										customs.sleeve.type
									].image.split("|")[0]
								}
								neckline={
									customsChoice.neckline[
										customs.neckline.type
									].image
								}
								sleever={
									customsChoice.sleeve[
										customs.sleeve.type
									].image.split("|")[1]
								}
								length={
									customsChoice.length[customs.length.type]
										.image
								}
							/>
							<ChangeChoice
								customsChoice={customsChoice}
								customs={customs}
								changeCustomHandler={changeCustomHandler}
							/>
						</div>
					</div>
				</Modal>
			) : null}
		</>
	);
}
