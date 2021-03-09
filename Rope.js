class Rope
{
	constructor(body1, body2, offsetX, offsetY)
	{
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		var options =
		{
			bodyA: body1,
			bodyB: body2,
			pointB:
			{
				x: this.offsetX,
				y: this.offsetY
			}
		}
		this.rope = Constraint.create(options);
		World.add(world, this.rope);
	}

	display()
	{
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		var anchor1_X = pointA.x;
		var anchor1_Y = pointA.y;

		var anchor2_X = pointB.x + this.offsetX;
		var anchor2_Y = pointB.y + this.offsetY;

		strokeWeight(2);
		stroke(101, 64, 42);
		line(anchor1_X, anchor1_Y, anchor2_X, anchor2_Y);
	}
}