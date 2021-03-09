pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Pausable.sol";

contract TinfoilNFT is Ownable, ERC721Pausable {
    uint256 public idTracker;

    // converts id -> token type
    mapping(uint256 => uint256) public tokenType;

    /*
    @notice the constructor function is fired only once during contract deployment
    @dev assuming all NFT URI metadata is based on a URL he baseURI would be something like https://
    */
    constructor(string memory name, string memory symbol) public ERC721(name, symbol) {
        idTracker = 0;
    }

    /*
    @notice mintNewNFT allows the owner of this contract to mint an input address a newNFT
    @param _to is the address the NFT is being minted to
    */
    function mintNewNFT(
        address _to,
        uint256 _type,
        string memory _tokenURI
    ) public onlyOwner {
        _safeMint(_to, idTracker);
        _setTokenURI(idTracker, _tokenURI);
        tokenType[idTracker] = _type;
        idTracker++;
    }

    /*
    @notice mintNewNFT allows the owner of this contract to mint an input address a newNFT
    @param _to is the address the NFT is being minted to
    */
    function mintNewNFTWithData(
        address _to,
        uint256 _type,
        string memory _tokenURI,
        bytes memory _data
    ) public onlyOwner {
        _safeMint(_to, idTracker, _data);
        _setTokenURI(idTracker, _tokenURI);
        tokenType[idTracker] = _type;
        idTracker++;
    }

    function burn(uint256 tokenId) public onlyOwner {
        _burn(tokenId);
    }

    function setTokenURI(uint256 tokenId, string memory _tokenURI)
        public
        onlyOwner
    {
        _setTokenURI(tokenId, _tokenURI);
    }

    function setBaseURI(string memory baseURI_) public onlyOwner {
        _setBaseURI(baseURI_);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}