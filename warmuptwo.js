Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.accounts
code = fs.readFileSync('Voting.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['Rama','Nick','Jose'], {data: byteCode, from: web3.eth.accounts[0], gas: 470000})
deployedContract.address
contractInstance = VotingContract.at(deployedContract.address)
contractInstance
contractInstance.totalVotesFor.call('Rama')
contractInstance.voteForCandidate('Rama', {from:web3.eth.accounts[0]})
contractInstance.totalVotesFor.call('Rama')
contractInstance.voteForCandidate('Rama', {from:web3.eth.accounts[0]})
contractInstance.voteForCandidate('Rama', {from:web3.eth.accounts[0]})
contractInstance.totalVotesFor.call('Rama')
contractInstance.totalVotesFor.call('Rama')
contractInstance.address // '0xf5f69a95412daf5c774b2973e3ac31355914c1ed' 

web3.personal.newAccount('verystrongpassword') // '0x7bac972a808cd798c0f9aeb5e7cf185b39d95e65'
