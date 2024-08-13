$image="canvascontent1unfucker"
$tag="latest"


echo "building $image":"$tag"

docker build -t jmgitde/"$image":"$tag" .
docker push jmgitde/"$image":"$tag"