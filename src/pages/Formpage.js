import React from 'react';

const Formpage = () => {

	return (
		<div>

			<div className='form-body'>

				<div class="container right-panel-active">

					<div class="container__form container--signup">
						<form action="#" class="form" id="form1">
							<h2 class="form__title">Sign Up</h2>
							<input type="text" placeholder="Name" class="input" />
							<input type="email" placeholder="Email" class="input" />
							<input type="text" placeholder="phone" class="input" />
							<input type="password" placeholder="Password" class="input" />
							<button class="btn">Sign Up</button>
						</form>
					</div>


					<div class="container__form container--signin">
						<form action="#" class="form" id="form2">
							<h2 class="form__title text-black" >Upadte Details</h2>
							<input type="text" placeholder="Name" class="input" />
							<input type="email" placeholder="Email" class="input" />
							<input type="text" placeholder="phone" class="input" />
							<button type='submit' class="btn">Upadte</button>
						</form>
					</div>


					<div class="container__overlay">
						<div class="overlay">
							<div class="overlay__panel overlay--left">
								<button class="btn" id="signIn">Change</button>
							</div>
							<div class="overlay__panel overlay--right">
								<button class="btn" id="signUp">Sign Up</button>
							</div>
						</div>
					</div>
				</div>

			</div>


		</div>
	)
}

export default Formpage