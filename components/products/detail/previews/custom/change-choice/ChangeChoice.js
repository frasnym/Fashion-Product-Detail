import React from "react";

export default function ChangeChoice(props) {
	return (
		<div className="flex flex-col">
			{Object.keys(props.customsChoice).map((chKey) => {
				return (
					<div key={chKey} className="flex-1">
						<div className="capitalize">{chKey}</div>
						<div className="grid grid-cols-6 gap-2">
							{Object.keys(props.customsChoice[chKey]).map(
								(chSubKey) => {
									return (
										<div
											key={chSubKey}
											className="text-center"
										>
											<div className="bg-gray-100 h-14 w-14">
												<img
													src={
														props.customsChoice[
															chKey
														][chSubKey].logo
													}
													className="cursor-pointer h-full m-auto"
													onClick={() =>
														props.changeCustomHandler(
															{
																...props.customs,
																[chKey]: {
																	...props
																		.customs[
																		chKey
																	],
																	type: chSubKey,
																	logo:
																		props
																			.customsChoice[
																			chKey
																		][
																			chSubKey
																		].logo,
																	image:
																		props
																			.customsChoice[
																			chKey
																		][
																			chSubKey
																		].image,
																},
															}
														)
													}
												/>
											</div>
											<p>
												{
													props.customsChoice[chKey][
														chSubKey
													].name
												}
											</p>
										</div>
									);
								}
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
